import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { ViewsService } from './views.service'
import { View } from './entities/view.entity'
import { FindManyViewArgs, FindUniqueViewArgs } from './dto/find.args'
import { CreateViewInput } from './dto/create-view.input'
import { UpdateViewInput } from './dto/update-view.input'
import { Product } from '../products/entities/product.entity'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { User } from '../users/entities/user.entity'
import {
  AllowAuthenticated,
  GetUser,
} from 'src/common/decorators/auth/auth.decorator'
import { checkRowLevelPermission } from 'src/common/util'
import { GetUserType } from 'src/common/types'

@Resolver(() => View)
export class ViewsResolver {
  constructor(
    private readonly viewsService: ViewsService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => View)
  createView(
    @Args('createViewInput') args: CreateViewInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.viewsService.create(args)
  }

  @AllowAuthenticated('admin')
  @Query(() => [View], { name: 'views' })
  findAll(@Args() args: FindManyViewArgs) {
    return this.viewsService.findAll(args)
  }
  @AllowAuthenticated()
  @Query(() => [View], { name: 'myViews' })
  myViews(@Args() args: FindManyViewArgs, @GetUser() user: GetUserType) {
    return this.viewsService.findAll({
      ...args,
      where: { ...args.where, uid: { equals: user.uid } },
    })
  }

  @AllowAuthenticated()
  @Query(() => View, { name: 'view' })
  findOne(@Args() args: FindUniqueViewArgs) {
    return this.viewsService.findOne(args)
  }

  @AllowAuthenticated()
  @Mutation(() => View)
  updateView(
    @Args('updateViewInput') args: UpdateViewInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.uid)
    return this.viewsService.update(args)
  }

  @AllowAuthenticated()
  @Mutation(() => View)
  async removeView(
    @Args() args: FindUniqueViewArgs,
    @GetUser() user: GetUserType,
  ) {
    const view = await this.prisma.view.findUnique(args)
    checkRowLevelPermission(user, view.uid)
    return this.viewsService.remove(args)
  }

  @ResolveField(() => Product)
  product(@Parent() parent: View) {
    return this.prisma.product.findUnique({ where: { id: parent.pid } })
  }

  @ResolveField(() => User)
  user(@Parent() parent: View) {
    return this.prisma.user.findUnique({ where: { uid: parent.uid } })
  }
}
